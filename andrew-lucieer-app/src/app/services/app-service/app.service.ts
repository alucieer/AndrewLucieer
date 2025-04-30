import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, signal } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class AppService {
	themeModeSignal = signal<string>("light");
	isSmallScreen: boolean = false;

    constructor(
		@Inject(DOCUMENT) private document: Document,
		breakpointObserver: BreakpointObserver) {
			breakpointObserver.observe([
				Breakpoints.Handset
			]).subscribe(result => {
				this.isSmallScreen = result.matches;
			});
    }

	setThemeMode(themeMode: string) {
		this.themeModeSignal.set(themeMode);
	}

	toggleThemeMode() {
		this.themeModeSignal.update((value) => (value === "dark" ? "light" : "dark"));
        
        //Updates theme mode in body classlist
        this.document.body.setAttribute('class', '');
        this.document.body.classList.add(this.themeModeSignal() + '-mode');
	}
}