
import {Injectable, Inject} from '@angular/core';
import { TRANSLATIONS } from './translations'; // import our opaque token

@Injectable()
export class TranslateService {
   
    _currentLang= window.navigator.language;
    public get currentLang() {
        return this._currentLang;
    }

    // inject our translations
    constructor(@Inject(TRANSLATIONS) private _translations: any) {
    }

    public use(lang:any) {
        // set current language
        lang=window.navigator.language;
        this._currentLang = lang;
    }

    private translate(key: string): string {
        // private perform translation
        let translation = key;

        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }

        return translation;
    }

    public instant(key: string) {
        // call translation
        return this.translate(key); 
    }
}