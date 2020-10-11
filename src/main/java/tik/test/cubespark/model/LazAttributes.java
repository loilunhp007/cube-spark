package tik.test.cubespark.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class LazAttributes {
	public String name;
	public String short_description;
	public String description;
	public String brand;
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
	}
}
