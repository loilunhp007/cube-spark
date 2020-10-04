package tik.test.cubespark.controller;

import javax.validation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import tik.test.cubespark.model.Post;
import tik.test.cubespark.service.PostService;

@RestController
@RequestMapping("/api")
public class PostController {
	private final Logger log = LoggerFactory.getLogger(PostController.class);
	
	@Autowired
	PostService postService;
	
	@GetMapping("/post/list")
	List<Post> list(){
		return postService.listPost();
	}
	
	@GetMapping("/post/{id}")
	ResponseEntity<?> getPost(@PathVariable Long postId){
		return postService.findById(postId);
	}
	
    @PostMapping("/post")
    ResponseEntity<Post> createPost(@Valid @RequestBody Post post) throws URISyntaxException {
        Post newPost = postService.savePost(post);
        return ResponseEntity.created(new URI("/api/post" + newPost.getId())).body(newPost);
    }
}
