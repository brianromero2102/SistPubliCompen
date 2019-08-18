import * as moment from 'moment';
import {ignore} from 'selenium-webdriver/testing';
import {IAuthTokenInformation} from '../interfaces/auth.interface';
import {FuseNavigation} from '../../../@fuse/types';

export function formatDate(str: string): string {
    return moment(str).format('YYYY-MM-DD');
}

export function getToday(): any {
    return moment().format('YYYY-MM-DD');
}


export function getLastDay(): any {
    return moment().add(1, 'days').format('YYYY-MM-DD');
}

export function getFullName(user: IAuthTokenInformation): string {
    if (!user) {
        return '';
    }
    return (user.name ? user.name : '') + ' ' + (user.lastname ? user.lastname : '');
}

export function createNavigation(user: IAuthTokenInformation): FuseNavigation[] {

    if (!user || user && user.profile && user.profile.permissions && user.profile.permissions.length === 0) {
        return null;
    }

    let data: FuseNavigation[];

    let rootList: any[] = [];

    data = [{
        id: user.profile.name,
        title: user.profile.name,
        translate: user.profile.name,
        type: 'group',
        icon: 'apps',
        children: []
    }];

    user.profile.permissions.forEach(list => {
        if (list.urlRoot && Object.keys(list.urlRoot).length > 0) {

            let dataChild: any = null;

            const root: any = rootList.find(p => Number(p.id) === Number(list.urlRoot.id));


            if (root && Object.keys(root).length > 0) {

                let listRoot: any = data[0].children.find(s => s.id === root.description);

                listRoot.children.push(createChildItem(list, root));

            } else {

                data[0].children.push({
                    id: list.urlRoot.description,
                    title: list.urlRoot.description,
                    translate: list.urlRoot.description,
                    type: 'collapsable',
                    icon: 'apps',
                    children: [createChildItem(list, list.urlRoot)]
                });

                rootList.push(list.urlRoot);
            }

        } else {
            data[0].children.push(createChildItem(list));
        }
    });

    return data;
}

function createChildItem(item: any, root?: any): any {

    let child: any;

    child = {
        id: item.name,
        title: item.name,
        translate: item.name,
        type: 'item',
        // icon: 'check_box',
        url: '/services/' + item.url
    };

    if (root && Object.keys(root).length > 0) {
        child.root = root.description;
    }

    return child;
}

export function slugify(text): string {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}