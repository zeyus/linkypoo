// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { Component } from "svelte";
import type { HTMLAnchorAttributes, HTMLImgAttributes } from "svelte/elements";

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	namespace Props {
		interface Link {
			linkText: string;
			linkIcon?: string;
			linkIconSvg?: boolean;
			linkAttrs: HTMLAnchorAttributes;
			section?: string;
			color?: string;
			me?: boolean; // If true, the link will be added to a <link rel="me"> tag
		}
		interface LinkSection {
			title: string;
			weight: number;
			image?: HTMLImgAttributes;
		}
		interface Profile {
			name: string;
			avatar: HTMLImgAttributes;
			description?: string;
		}
	}
}

export {};
