<?php
    $prefix = $_POST['prefix'];
    $firstname = $_POST['firstname'];
    $middleinitial = $_POST['midinit'];
    $lastname = $_POST['lastname'];
    $fullname = "" . $prefix . " " . $firstname . " " . $middleinitial . " " . $lastname;  
    $ref = $_POST['refnum'];

    // mail to submit to JAANY email
    $mailto = $_POST['emailTo'];
    $mailFrom = "From: " . $_POST['jaanyTo'];
    $subject = "New Membership Ref # " . $_POST['refnum'];
    $message =
        "Reference Number: " . $ref .
        "\nMembership Level: " . $_POST['membership'] .
        "\nPrefix: " . $prefix .
        "\nFirst name: " . $firstname .
        "\nMiddle Initial: " . $middleinitial .
        "\nLast name: " . $lastname .
        "\nName in Kanji: " . $_POST['namekanji'] .
        "\nEmail Address: " . $_POST['emailadd'] .
        "\nAddress: " . $_POST['address'] .
        "\nCity: " . $_POST['city'] .
        "\nState: " . $_POST['state'] .
        "\nZipcode: " . $_POST['zip'] .
        "\nEmergency Full Name: " . $_POST['emergencyfullname'] .
        "\nEmergency Phone: " . $_POST['emergencyphone'] .
        "\nEmergency Address: " . $_POST['emergencyaddress'] .
        "\nEmergency Name Japan: " . $_POST['emergencyjapanname'] .
        "\nEmergency Phone Number Japan: " . $_POST['emergencyjapanphone'] .
        "\nDate of Birth (mm/dd/yyyy): " . $_POST['dobm'] . "/" . $_POST['dobd'] . "/" . $_POST['doby'] .
        "\nReligion: " . $_POST['religion'] .
        "\nStatus: " . $_POST['status'] .
        "\nBirthplace: " . $_POST['birthplace'] . 
        "\nHobbies: " . $_POST['hobbies'] .
        "\nReferred: " . $_POST['referred'] .
        "\nGift: " . $_POST['gift'] .
        "\nPayment Method: " . $_POST['payment'] . "";

    mail($mailto, $subject, $message, $mailFrom);


    // mail to confirm submission of form
    $mailto2 = $_POST['emailadd'];
    $subject2 = "Confirmation of Membership Form Submission";
    $mailFrom2 = "From : " . $_POST['memTo'];
    $message2 = "Dear " . $fullname . ",\n\nThank you for signing up to be a member of the Japanese American Association of New York (Application Reference Number: " . $ref . "). As soon as your payment (made via " . $_POST['payment'] . ") is processed, you should be getting further communication from us.\n\nWe look forward to seeing you at our events!\n\nRegards,\nThe Japanese American Association of New York\n\n\n\n\n------------------------------------------------------------------\n\nThis email was sent by an automated system which is not monitored. If you reply to this email, no one will see it. To contact us go to www.jaany.org/contact/\n\nReceived this email in error? Report it to info@jaany.org.";
        
    mail($mailto2, $subject2, $message2, $mailFrom2);
?>