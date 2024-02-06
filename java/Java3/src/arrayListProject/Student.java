package arrayListProject;

public class Student {
	
		String name;
		int age;
		String std;
		String bloodGroup;
		
		Student(String name,int age,String std,String bloodgroup){
			this.name=name;
			this.age=age;
			this.bloodGroup=bloodgroup;
			this.std=std;
					
		}

		@Override
		public String toString() {
			return "Student [name=" + name + ", age=" + age + ", std=" + std + ", bloodGroup=" + bloodGroup + "]";
		}
		
		
	
}
