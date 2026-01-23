/*export const environment = {
    production: false,
    base: 'http://localhost:8080/',
    file: 'http://localhost:8080/cloud/files/list',
    deleteFile: 'http://localhost:8080/cloud/files/delete',
    folder: 'http://localhost:8080/cloud/list-folders',
    listFolders: 'http://localhost:8080/cloud/files/list',
    createFolder: 'http://localhost:8080/cloud/create/folder',
    registerAccount: 'http://localhost:8080/auth/register',
    login: 'http://localhost:8080/auth/login',
    bucket: 'http://localhost:8080/bucket/id',
    upFile: 'http://localhost:8080/cloud/files/upload'
} */

const URL_BASE = 'http://localhost:8080';

export const environment = {
    production: true,
    auth: {
        login: `${URL_BASE}/auth/login`,
        register: `${URL_BASE}/auth/register`
    },
    account: {

    },
    folder: {
        list: `${URL_BASE}/cloud/files/list`,
        l: `${URL_BASE}/cloud/list-folders`,
        add: `${URL_BASE}/cloud/create/folder`,
        delete: `${URL_BASE}/cloud/delete/folder`

    },
    file: {
        upload: `${URL_BASE}/cloud/files/upload`,
        list: `${URL_BASE}/cloud/files/list`,
        listDir: '/list/dir',
        download: `${URL_BASE}/cloud/files/download/{filename}`,
        rename: `${URL_BASE}/cloud/files/rename`,
        delete: `${URL_BASE}/cloud/files/delete`
    }
}
