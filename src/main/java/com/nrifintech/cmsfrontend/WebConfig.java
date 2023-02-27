package com.nrifintech.cmsfrontend;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration
public class WebConfig implements WebMvcConfigurer {
 
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // registry.addViewController("/profile/{id}").setViewName("../canteenTemplate.html");
        // registry.addViewController("/dashboard").setViewName("/static/canteenTemplate.html");
        // registry.addViewController("/dashboard2").setViewName("/canteenTemplate.html");
        registry.addViewController("/dashboard3").setViewName("apple");
    }
   @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
  }
}
