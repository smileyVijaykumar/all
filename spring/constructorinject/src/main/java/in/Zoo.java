package in;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class Zoo {
	@Autowired
	@Qualifier("l")
	Animal a;
	
	
	void sound() {
		a.sound();
	}

}