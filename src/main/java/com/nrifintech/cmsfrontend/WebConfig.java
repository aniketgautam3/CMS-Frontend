package com.nrifintech.cmsfrontend;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/login").setViewName("login");
        registry.addViewController("/canteen/profile/{id}").setViewName("canteenTemplate");
        registry.addViewController("/canteen/orders").setViewName("canteenTemplate");
        registry.addViewController("/canteen/dashboard").setViewName("canteenTemplate");
        registry.addViewController("/canteen/menu-management").setViewName("canteenTemplate");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/canteen/**").addResourceLocations("classpath:/static/canteen/");
        registry.addResourceHandler("/user/**").addResourceLocations("classpath:/static/user/");
        registry.addResourceHandler("/admin/**").addResourceLocations("classpath:/static/admin/");
    }
}
