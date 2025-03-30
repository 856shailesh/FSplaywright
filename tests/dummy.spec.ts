import test from "@playwright/test";

test.use({ baseURL: "https://podtest.com" })

test.afterAll(() => {
    console.log("Running afterall in TF 1")
})

test.beforeEach(({} , testInfo) => {
    console.log("running before each", testInfo.title);
})

test("TestCase : Login",
    {
        tag: "@smoke",
        annotation: {
            type: 'issue',
            description : "Dummy Test",
        }
    },
    async({page,browser}, testInfo) => {
        await page.goto("https://amazon.in");
        console.log(testInfo.config);
        console.log("Project level", testInfo.project);
        console.log(testInfo.tags)
    }
)