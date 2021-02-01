import LoginButton from "@/components/LoggedInButton.vue";
import {shallowMount} from "@vue/test-utils";

const $router = {
    replace: jest.fn()
}

describe("LoggedInButton.vue", ()=> {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallowMount(LoginButton, {
          methods:   {setupFirebase: ()=> {}}
        })
    })

    it("renders", ()=> { //Test implemetnowania bazy danych (firebase)
        expect(wrapper.exists()).toBe(true);
    })
    it("does button exists", ()=> { //Test szukania tekstu
        expect(wrapper.find("button").text()).toBe("Log out")
    })
})