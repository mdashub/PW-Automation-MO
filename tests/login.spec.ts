import {test,expect} from '@playwright/test';
import { QA_LOGIN, PAGE_TITLES } from './testData/loginPage.data';

test('LOGIN APPLICATION', async ({page}) =>{

    await page.goto("https://classic.crmpro.com/index.html");
    let actual_title = await page.title();
    expect(actual_title).toBe(PAGE_TITLES.LOGIN_PAGE_TITLE);  
})