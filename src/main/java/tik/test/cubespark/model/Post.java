package tik.test.cubespark.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "post")
public class Post {
	@Id
	@GeneratedValue
	private Long id;
	
	@NonNull
	private String content;
	
	public static void main(String[] args) {
		Post post = new Post("a");
		
		System.out.println(post);
	}
}
