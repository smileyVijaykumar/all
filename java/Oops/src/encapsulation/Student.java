package encapsulation;

public class Student {

	// states
	
	private String name;
	private int age;
	private String job;
	
	//getters
	
	public String getName() {
		return name;
	}
	
	public int getAge() {
		return age;
		
	}
	
	public String getjob() {
		return job;
	}
	
	public void setName(String name) {
		this.name=name;
	}
	
	public void setAge(int age) {
		this.age=age;
	}
	public void setJob(String job) {
		this.job=job;
	}
}
