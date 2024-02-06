package agrregation;

public class School {
	int sc_id;
	String sc_name;
	
	Student s;
	
	public School(int sc_id,String sc_name) {
		this.sc_id=sc_id;
		this.sc_name=sc_name;
	}
	
	public void getStudent(String name,int age,String bloodgroup) {


		s=new Student(name, age, bloodgroup);
		
	}
	
	
}
