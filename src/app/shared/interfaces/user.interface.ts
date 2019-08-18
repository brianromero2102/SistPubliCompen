export interface IUrlRoot {
    id: number;
    description: string;
}

export interface IPermissions {
    id: number;
    name: string;
    url: string;
    urlRoot: IUrlRoot;
    active: boolean;
    activeUrl?: boolean;
}

export interface IProfile {
    id: number;
    name: string;
    permissions: IPermissions[];
}

export interface IUser {
    id: number;
    username: string;
    name: string;
    email: string;
    lastname: string;
    doctype: string;
    docnumber: string;
    password: string;
    profileid?: number;
    profile?: IProfile;
}
