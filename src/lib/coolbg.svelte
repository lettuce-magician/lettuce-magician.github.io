<script lang="ts">
    import { onMount } from "svelte";

    export let min_v = 0.75;
    export let max_v = 2.5;
    export let max_blocks: number = 35;

    const blocks: Block[] = [];

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
        v: number;

        constructor() {
            this.x = rng(0, canvas?.width);
            this.v = rng(min_v, max_v);
            this.y = rng(0, canvas?.height);
            this.w = 10;
            this.h = 75;
            this.a = rng(1, 10) / 10;
        }

        update() {
            // tem uma singular barra q consegue sair
            // ve agr
            // acho q os x tão dando overlap

            if (this.y > 0 - this.h ) {
                this.y -= this.v;
            } else {
                this.y = canvas?.height + 50;
                this.x = rng(0, canvas?.width);
                this.a = rng(1, 10) / 10;
                this.v = rng(min_v, max_v);
            }
        }

        draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle = `rgba(59, 130, 246, ${this.a})`;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    function resizeCanvasToDisplaySize() {
        if (
            canvas?.width !== canvas?.clientWidth ||
            canvas?.height !== canvas?.clientHeight
        ) {
            canvas.width = canvas?.clientWidth;
            canvas.height = canvas?.clientHeight;
        }
    }

    onMount(() => {
        const ctx = canvas?.getContext("2d") as CanvasRenderingContext2D;

        resizeCanvasToDisplaySize();

        for (let i = 0; i < max_blocks; i++) {
            blocks.push(new Block());
        }

        function animate(time: number) {
            requestAnimationFrame(animate);
            resizeCanvasToDisplaySize();

            ctx.clearRect(0, 0, canvas?.width, canvas?.height);

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
        class="top-0 fixed size-full -z-10 bg-gradient-to-t from-[rgb(25,25,25)] to-[rgb(15,15,15)]"
    ></canvas>
</main>
