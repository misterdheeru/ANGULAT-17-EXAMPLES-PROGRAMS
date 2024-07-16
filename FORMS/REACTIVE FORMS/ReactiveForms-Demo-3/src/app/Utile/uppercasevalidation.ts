export class Uppercasevalidation {

    static uppercaseName(text:any)
    {
        let value = /[A-Z]+/.test(text.value);

        if(value==false)
        {
            return {uppercaseinputName :true}
        }
        else
        {
            return null
        }
    }

}
