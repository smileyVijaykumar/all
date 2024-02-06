package encapsulation;

public class EmployeeMain {

	public static void main(String[] args) {
		Employee employee=new Employee();
		
		
		
		
		employee.setId(1);
		employee.setName("Vijay Kumar");
		employee.setAge(23);
		
		
		System.out.println(employee.getId());
		System.out.println(employee.getName());
		System.out.println(employee.getage());
		System.out.println("************************");
		
		
		employee.setId(2);
		employee.setName("Kavin ");
		employee.setAge(22);
		
		
		
		
		
		
		System.out.println(employee.getId());
		System.out.println(employee.getName());
		System.out.println(employee.getage());
		System.out.println("************************");
	}
}
