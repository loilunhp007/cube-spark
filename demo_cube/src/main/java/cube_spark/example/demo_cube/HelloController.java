package cube_spark.example.demo_cube;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@RestController
public class HelloController{
    @RequestMapping("/")
    public String index(){
        return "Greeting from Spring boot!";
    }
}