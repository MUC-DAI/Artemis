import { GuidedTourSetting } from 'app/guided-tour/guided-tour-setting.model';

export class Account {
    public activated?: boolean;
    public authorities?: string[];
    public login?: string;
    public visibleEmail?: string;
    public name?: string;
    public internal: boolean;
    public firstName?: string;
    public lastName?: string;
    public langKey?: string;
    public imageUrl?: string;
    public guidedTourSettings: GuidedTourSetting[];

    constructor(
        activated?: boolean,
        authorities?: string[],
        visibleEmail?: string,
        firstName?: string,
        langKey?: string,
        lastName?: string,
        login?: string,
        imageUrl?: string,
        guidedTourSettings?: GuidedTourSetting[],
    ) {
        this.login = login;
        this.firstName = firstName;
        this.lastName = lastName;
        this.visibleEmail = visibleEmail;
        this.activated = activated;
        this.langKey = langKey;
        this.authorities = authorities;
        this.imageUrl = imageUrl;
        this.guidedTourSettings = guidedTourSettings || [];
    }
}
