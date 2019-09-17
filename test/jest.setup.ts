// #region Global Imports
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import nock from "nock";

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
