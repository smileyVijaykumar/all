package classs;

public class Room3 {

	public String faculty_name;
	public int age;
	public long phone_no;
	public double sal;
	
	public Room3() {
		
	}
	public Room3(String faculty_name,int age,long phone_no,double sal) {
		this.faculty_name=faculty_name;
		this.age=age;
		this.phone_no=phone_no;
		this.sal=sal;
		
	}
	
	public void HarshaSir() {
		System.out.println("The Name Of The Faculty Room-3     : "+ faculty_name);
		System.out.println("The Age Of The Faculty Room -3     : "+age);
		System.out.println("The Phone No of Faculty Room-3     : "+this.phone_no);
		System.out.println("The Salary Of the Faculty Room -3  :" +this.sal);
	}
	
	public void GirishSir() {
		System.out.println("The Name Of The Faculty Room-3     : "+ faculty_name);
		System.out.println("The Age Of The Faculty Room -3     : "+age);
		System.out.println("The Phone No of Faculty Room-3     : "+this.phone_no);
		System.out.println("The Salary Of the Faculty Room -3  :" +this.sal);
	}
	
	
	
}
