import LoginButton from "@/components/LoggedInButton.vue";
import {shallowMount} from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

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
    it("does text log out exists", ()=> { //Test szukania tekstu
        expect(wrapper.find("button").text()).toBe("Log out");
    })
    it("does any div exists in button", ()=> {
        expect(wrapper.find('div').exists()).toBe(true)
    })
    
})