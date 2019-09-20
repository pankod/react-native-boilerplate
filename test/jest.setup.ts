// #region Global Imports
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import nock from "nock";
import "jest-styled-components";

enzyme.configure({ adapter: new Adapter() });

nock("https://api.nasa.gov/")
    .persist()
    .get("/planetary/apod")
    .query({ api_key: "NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo", hd: true })
    .reply(200, {
        copyright: "Pankod",
        date: "2019-05-23",
        explanation: "",
        hdurl: "",
        media_type: "",
        service_version: "",
        title: "",
        url: "",
    });

nock("https://api.nasa.gov/")
    .persist()
    .get("/planetary/apod")
    .query({ api_key: "NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo", hd: false })
    .reply(500);

nock("https://api.nasa.gov/")
    .persist()
    .get("/200")
    .reply(200, { success: true });

nock("https://api.nasa.gov/")
    .persist()
    .get("/404")
    .reply(404, { success: false });

const mockReturnValues = {
    arrayOne: JSON.stringify(["red", "blue"]),
    objectOne: JSON.stringify({
        isATest: true,
        hasNestedData: {
            ohYeah: "it's true",
        },
    }),
    stringOne: JSON.stringify("testing string"),
};

function mockMultiGetTestData() {
    return [
        ["key1", JSON.stringify({ valor: 1 })],
        ["key2", JSON.stringify({ valor: 2 })],
    ];
}

jest.mock("@react-native-community/async-storage", () => ({
    setItem: jest.fn(() => {
        return new Promise(resolve => {
            resolve(null);
        });
    }),
    multiSet: jest.fn(() => {
        return new Promise(resolve => {
            resolve(null);
        });
    }),
    getItem: jest.fn(key => {
        return new Promise(resolve => {
            if (mockReturnValues[key]) {
                resolve(mockReturnValues[key]);
            } else {
                resolve(null);
            }
        });
    }),
    multiGet: jest.fn(() => {
        return new Promise(resolve => {
            resolve(mockMultiGetTestData());
        });
    }),
    removeItem: jest.fn(() => {
        return new Promise(resolve => {
            resolve(null);
        });
    }),
    getAllKeys: jest.fn(() => {
        return new Promise(resolve => {
            resolve(["one", "two", "three"]);
        });
    }),
    multiRemove: jest.fn(() => ({
        then: jest.fn(),
    })),
}));
