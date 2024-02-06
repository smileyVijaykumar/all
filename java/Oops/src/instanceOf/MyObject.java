package instanceOf;

interface Bird{
	public  void sing();
	
}
class Eagle implements Bird{

	@Override
	public void sing() {
		System.out.println("Singing!");
		
	}
	
}
public class MyObject {
	
	public static void main(String[] args) {
		
		Bird b=new Eagle();
		System.out.println(b instanceof Eagle);
				
	}

}
