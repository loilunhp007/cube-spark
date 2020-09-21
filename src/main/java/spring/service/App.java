package spring.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class App {
    public static void main(String[] args) {
        //SpringApplication.run(App.class, args);
    	// ApplicationContext chính là container, chứa toàn bộ các Bean
    	 //System.out.println("> Trước khi IoC Container được khởi tạo");
    	ApplicationContext context = SpringApplication.run(App.class, args);
    	/* LifeCircle
    	System.out.println("> Sau khi IoC Container được khởi tạo");
        // Khi chạy xong, lúc này context sẽ chứa các Bean có đánh
        // dấu @Component.
        Girl girl = context.getBean(Girl.class);
        System.out.println("Girl instance: " + girl);
        System.out.println("> Trước khi IoC Container destroy Girl");
        ((ConfigurableApplicationContext) context).getBeanFactory().destroyBean(girl);
        System.out.println("> Sau khi IoC Container destroy Girl");
        System.out.println("Girl Outfit: " + girl.outfit);
        girl.outfit.wear();
        */
    	
    	/* ComponentsScan
    	Girl girl = context.getBean(Girl.class);
    	System.out.println("Bean " + girl.toString());
    	
    	OtherGirl otherGirl = context.getBean(OtherGirl.class);
    	System.out.println("Bean " + otherGirl.toString());
    	*/
    	// JPA sqlserver
    	/*
    	UserRepository userRepository = context.getBean(UserRepository.class);
    	
    	userRepository.findAll().forEach(System.out::println);
    	User user = userRepository.save(new User());
    	// Khi lưu xong, nó trả về User đã lưu kèm theo Id.
        System.out.println("User vừa lưu có ID: " + user.getId());
        Long userId = user.getId();
        // Cập nhật user.
        user.setAgi(100);
        // Update user
        // Lưu ý, lúc này đối tượng user đã có Id. 
        // Nên nó sẽ update vào đối tượng có Id này 
        // chứ không insert một bản ghi mới
        userRepository.save(user);

        // Query lấy ra user vừa xong để kiểm tra xem.
        User user2 = userRepository.findById(userId).get();
        System.out.println("User: " + user);
        System.out.println("User2: " + user2);

        // Xóa User khỏi DB
        userRepository.delete(user);

        // In ra kiểm tra xem userId còn tồn tại trong DB không
        User user3 = userRepository.findById(userId).orElse(null);
        System.out.println("User3: " + user2);*/
    }
}













