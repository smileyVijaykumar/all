package in;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
	public static void main(String[] args) {
		ApplicationContext context=new AnnotationConfigApplicationContext(config.class);
		Zoo zoo=(Zoo) context.getBean("zoo");
		zoo.sound();
	}

}