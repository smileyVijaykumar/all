package in;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
@Qualifier("l")
public class Lion implements Animal {
	
	public void sound() {
		System.out.println("ROAR");
	}

}
