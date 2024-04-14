// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		// wizard shit i dont know why but this is necessary
		declare module "*.svx"{
			const aVar: ConstructorOfATypedSvelteComponent
			export default aVar
		}
	}
};


export {};
