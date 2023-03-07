package com.nrifintech.cmsfrontend;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
    	registry.addViewController("/login").setViewName("/login/index.html");
        registry.addViewController("/canteen/profile/{id}").setViewName("../../canteenTemplate.html");
        registry.addViewController("/canteen/dashboard").setViewName("../canteenTemplate.html");
        registry.addViewController("/user/dashboard").setViewName("../userTemplate.html");
        
        registry.addViewController("/user/menu").setViewName("../userTemplate.html");
        registry.addViewController("/user/feedback").setViewName("../userTemplate.html");
        registry.addViewController("/user/orders").setViewName("../userTemplate.html");
        registry.addViewController("/user/cart").setViewName("../userTemplate.html");
        registry.addViewController("/admin/Dashboard/dashboard").setViewName("../../adminTemplate.html");
        registry.addViewController("/admin/UserInformation/user").setViewName("../../adminTemplate.html");
        registry.addViewController("/admin/CanteenInformation/canteenInformation").setViewName("../../adminTemplate.html");
        registry.addViewController("/admin/Inventory/inventory").setViewName("../../adminTemplate.html");
        registry.addViewController("/admin/ApproveMenu/menu").setViewName("../../adminTemplate.html");
        
    }
}
