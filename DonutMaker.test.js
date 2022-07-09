import DonutMaker from "./DonutMaker";

describe("DonutMaker",()=>{
    test("should be able to add a donut and retrieve the total count",()=>{
        // Arrange
        const underTest=new DonutMaker(0);
        // Act
        underTest.addDonut();
        // Assert
        expect(underTest.numDonuts).toEqual(1);
});
 //-----------------------------------------------------------------------------------------------------------

//auto clicker logic

test("should be able to add a autoclicker with 100 donuts",()=>{

    const underTest=new DonutMaker(100,0);

    underTest.addAutoclicker();

    expect(underTest.numDonuts).toEqual(0);
    expect(underTest.numAutoclickers).toEqual(1);
});

test("should not be allowed to buy autoclicker with 99 donuts ",()=>{

    const underTest=new DonutMaker(99,0);

    underTest.addAutoclicker();

    expect(underTest.numDonuts).toEqual(99);
    expect(underTest.numAutoclickers).toEqual(0);
});
test("should be able to increase cost of autoclicker if you have 1 or more",()=>{

    const underTest=new DonutMaker(200,0);

    underTest.addAutoclicker();

    expect(underTest.numDonuts).toEqual(100);
    expect(underTest.numAutoclickers).toEqual(1);
});
  //-----------------------------------------------------------------------------------------------------------
// Baker Logic
test("should be able to add a Baker with 1000 donuts",()=>{

    const underTest=new DonutMaker(1000,0,0);

    underTest.addBaker();

    expect(underTest.numDonuts).toEqual(0);
    expect(underTest.numBakers).toEqual(1);
});
test("should not be allowed to buy a Baker with 999 donuts",()=>{

    const underTest=new DonutMaker(999,0,0);

    underTest.addBaker();

    expect(underTest.numDonuts).toEqual(999);
    expect(underTest.numBakers).toEqual(0);
});
  //-----------------------------------------------------------------------------------------------------------



});