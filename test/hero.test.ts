import type { VueWrapper } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import type { ComponentPublicInstance, VNodeProps } from "vue";
import Hero from "../src/views/home/components/Hero.vue";

describe("Hero.vue", () => {
  it("should render", () => {
    const wrapper: VueWrapper<ComponentPublicInstance<{}, {}, {}, {}, {}, Record<string, any>, VNodeProps>> & Record<string, any>
        = mount(Hero);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
