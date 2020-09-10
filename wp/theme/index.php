<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1><?php bloginfo('sitenamp') ?></h1>
  <?php while (have_posts()): the_post(); ?>
  <h2><?php the_title(); ?></h2>
  <?php endwhile; ?>
</body>
</html>