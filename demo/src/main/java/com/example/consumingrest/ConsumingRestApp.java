package com.example.consumingrest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class ConsumingRestApp {
    private static final Logger log = LoggerFactory.getLogger(ConsumingRestApp.class);

    public static void main(String[] args) {
        SpringApplication.run(ConsumingRestApp.class, args);    
    }

    public RestTemplate restTemplate(RestTemplateBuilder builder){
        return builder.build();
    }
    
    public CommandLineRunner run(RestTemplate restTemplate){
        return args -> {
            Quote quote = restTemplate.getForObject(
                "https://gturnquist-quoters.cfapps.io/api/random", Quote.class);
                log.info(quote.toString());
        };
    }
} 