export {};

declare global {
    interface Window {
        api: {
            login: (username: string, password: string) => Promise<any>;
            register: (username: string, password: string) => Promise<any>;
        }
    }
}