<?php
    $prefix = $_POST['prefix'];
    $firstname = $_POST['firstname'];
    $middleinitial = $_POST['midinit'];
    $lastname = $_POST['lastname'];
    $fullname = "" . $prefix . " " . $firstname . " " . $middleinitial . " " . $lastname;
    $mailto = $_POST['emailTo'];
    $mailFrom = "From: " . $_POST['jaanyTo'];
    $message =
        "Prefix: " . $prefix .
        "\nFirst name: " . $firstname .
        "\nMiddle Initial: " . $middleinitial .
        "\nLast name: " . $lastname .
        "\nName in Kanji: " . $_POST['namekanji'] .
        "\nEmail Address: " . $_POST['emailadd'] .
        "\nAddress: " . $_POST['address'] .
        "\nCity: " . $_POST['city'] .
        "\nState: " . $_POST['state'] .
        "\nZipcode: " . $_POST['zip'] .
        "\nDate of Birth (mm/dd/yyyy): " . $_POST['dobm'] . "/" . $_POST['dobd'] . "/" . $_POST['doby'] .
        "\nBirthplace: " . $_POST['birthplace'] . 
        "\nTelephone: " . $_POST['telephone'] .
        "\nCellphone: " . $_POST['cellphone'] .
        "\nHigh School Name: " . $_POST['highschoolname'] .
        "\nHigh School Address: " . $_POST['highschooladdress'] .
        "\nMother's Name: " . $_POST['mothername'] .
        "\nMother's Occupation: " . $_POST['motheroccupation'] .
        "\nFather's Name: " . $_POST['fathername'] .
        "\nFather's Occupation: " . $_POST['fatheroccupation'] .
        "\nHonors: " . $_POST['honors'] .
        "\nExtra Curricular Activities: " . $_POST['extracurric'] .
        "\nOther Extra Curricular Activities: " . $_POST['oextracurric'] .
        "\nCollege and Universities Applied to/received response from: " . $_POST['colleges'] .
        "\nFinancial Details: " . $_POST['financials'] .
        "\nMember of JAANY: " . $_POST['member'] .
        "\nName of Member: " . $_POST['membername'] . "";

    mail($mailto, "Scholarship App. " . $fullname, $message, $mailFrom);



    $mailto2 = $_POST['emailadd'];
    $subject2 = "Confirmation of Scholarship Form Submission";
    $mailFrom2 = "From : " . $_POST['scholarTo'];
    $message2 = "Dear " . $fullname . ",\n\nWe have received your scholarship application. Please wait until the decision of the scholarship committee is released later in the year. We will notify you if you are a winner.\n\nIf you have any questions, please feel free to contact our office. Continue studying hard.\n\nBest,\nThe Japanese American Association of New York\n\n\n\n\n------------------------------------------------------------------\n\nThis email was sent by an automated system which is not monitored. If you reply to this email, no one will see it. To contact us go to www.jaany.org/contact/\n\nReceived this email in error? Report it to info@jaany.org.";
        
    mail($mailto2, $subject2, $message2, $mailFrom2);
?>