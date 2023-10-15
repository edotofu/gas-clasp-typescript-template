declare var global: any;
import { helloWorld } from "./test";

global.doGet = () => {
    return ContentService.createTextOutput(helloWorld);
}
