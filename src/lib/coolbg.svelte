<script lang="ts">
    import { onMount } from "svelte";

    export let dy:number = 5
    export let max_blocks:number = 30;

    const blocks: Block[] = [];
    const waitTime = 500;
    let lastTime = +new Date();

    let canvas: HTMLCanvasElement;

    function rng(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    class Block {
        x: number;
        y: number;
        w: number;
        h: number;
        a: number;

        win_height: number;
        win_width: number;

        constructor(width: number, height: number) {
            this.x = rng(0, width);
            this.y = height+50;
            this.w = 10;
            this.h = 75;
            this.a = rng(1,10)/10;

            this.win_height = height;
            this.win_width = width;
        }

        update() {
            if (this.y > 0 - this.h) {
                this.y -= dy;
            } else {
                this.y = this.win_height+50;
                this.x = rng(0, this.win_width)
                this.a = rng(1,10)/10
            }
        }

        draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle = `rgba(59, 130, 246, ${this.a})`;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    function resizeCanvasToDisplaySize() {
        const width = canvas?.clientWidth;
        const height = canvas?.clientHeight;
        if (canvas?.width !== width || canvas?.height !== height) {
            canvas.width = width;
            canvas.height = height;
        }
    }

    onMount(() => {
        const ctx = canvas?.getContext("2d") as CanvasRenderingContext2D;

        function animate(time: number) {
            requestAnimationFrame(animate);
            resizeCanvasToDisplaySize();

            const width = canvas?.width;
            const height = canvas?.height;

            ctx.clearRect(0, 0, width, height);

            if (+new Date() > lastTime + waitTime && blocks.length < max_blocks) {
                lastTime = +new Date();
                blocks.push(new Block(width, height));
            }

            blocks.forEach(function (e) {
                e.update();
                e.draw(ctx);
            });
        }
        

        requestAnimationFrame(animate);
    });
</script>

<main>
    <canvas
        bind:this={canvas}
        id="bg-canvas"
        class="top-0 absolute w-[100%] h-[100%] -z-10"
    ></canvas>
</main>
