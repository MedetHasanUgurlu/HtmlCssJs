package com.medethasanugurlu.javafullstackfrontend01;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication(exclude = {
        org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class,
        org.springframework.boot.actuate.autoconfigure.security.servlet.ManagementWebSecurityAutoConfiguration.class
})


public class HtmlCssJsApplication {

    public static void main(String[] args) {
        System.setProperty("spring.devtools.restart.enabled","true");
        System.setProperty("java.awt.headless", "false"); //Disables headless
        SpringApplication.run(HtmlCssJsApplication.class, args);

    }
}
