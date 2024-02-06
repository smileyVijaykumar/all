package composition;

public class DateOfBirth {
	int day;
	int month;
	int year;
	
	
	public DateOfBirth(int day,int month,int year) {
		this.day=day;
		this.month=month;
		this.year=year;
	}
	
	public void dateOfBirthDeatais() {
		System.out.println("day : "+day +" / " +"month :"+month +" / " +" Year :"  +" / "+year);
	}

}
