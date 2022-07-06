import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: any): "No User from Google" | {
        message: string;
        user: any;
    };
}
