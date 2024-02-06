package in;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
//@Primary
@Qualifier("m")
public class Monkey implements Animal{
	public void sound() {
		System.out.println("Whoop");
	}

}
