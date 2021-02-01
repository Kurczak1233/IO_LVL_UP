import LoginButton from "@/components/LoggedInButton.vue";
import {shallowMount} from "@vue/test-utils";
describe("LoggedInButton.vue", ()=> {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallowMount(LoginButton, {
        methods:   {setupFirebase: ()=> {}}
        })
    })

    it("renders", ()=> {
        expect(wrapper.exists()).toBe(true);
    })
})