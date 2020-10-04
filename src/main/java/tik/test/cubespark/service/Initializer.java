package tik.test.cubespark.service;

import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import tik.test.cubespark.model.Post;
import tik.test.cubespark.repository.PostRepository;

@Component
public class Initializer implements CommandLineRunner {
    private final PostRepository postRepository;

    @Autowired
    public Initializer(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @Override
    public void run(String... strings) {
        Stream.of("Post 1", "Post 2", "Post 3", "Post 4", "Post 5")
                .forEach(content -> postRepository.save(new Post(content)));
        postRepository.findAll().forEach(System.out::println);
    }
}
