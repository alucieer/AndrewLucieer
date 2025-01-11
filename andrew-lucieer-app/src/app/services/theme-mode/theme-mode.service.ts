import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, signal } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class ThemeModeService {
	themeModeSignal = signal<string>("light");

    constructor(@Inject(DOCUMENT) private document: Document) {

    }

	setThemeMode(themeMode: string) {
		this.themeModeSignal.set(themeMode);
	}

	updateThemeMode() {
		this.themeModeSignal.update((value) => (value === "dark" ? "light" : "dark"));
        
        //Updates theme mode in body classlist
        this.document.body.setAttribute('class', '');
        this.document.body.classList.add(this.themeModeSignal() + '-mode');
	}
}