<?php
$users = [
    [
        'gender' => 'male',
        'email' => 'sds@sd.co',
        'name' => 'danial',
        // ''
    ],
    [
        'gender' => 'female',
        'email' => 'sds@sder.co',
        'name' => 'saima',
        // ''
    ],
    [
        'gender' => 'male',
        'email' => 'sdssds@sd.co',
        'name' => 'awais',
        // ''
    ],
    [
        'gender' => 'female',
        'email' => 'sds@sder.co',
        'name' => 'khadija',
        // ''
    ],
    [
        'gender' => 'female',
        'email' => 'sds@sder.co',
        'name' => 'amna',
        // ''
    ],
];
function compareByName($users, $b) {
    return strcmp($users["name"], $b["name"]);
  }
  usort($users, 'compareByName');
  /* The next line is used for debugging, comment or delete it after testing */
  













?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>users</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
</head>

<body>
    <div class="container">
        <h4>Male Users</h4>
        <table class="table table-dark">
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <?php
            foreach ($users as $user) {
                if ($user['gender'] == 'female') {
                    continue;
                }
                
            ?>
                <tr>
                    <td><?= $user['name'] ?></td>
                    <td><?= $user['email'] ?></td>
                </tr>
            <?php } ?>
        </table>

        <h4>Female Users</h4>
        <table class="table table-dark">
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <?php
            foreach ($users as $user) {
                if ($user['gender'] == 'male') {
                    continue;
                }
                
            ?>
                <tr>
                    <td><?= $user['name'] ?></td>
                    <td><?= $user['email'] ?></td>
                </tr>
            <?php } ?>
        </table>
    </div>
</body>

</html>