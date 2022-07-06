<?
function showFeaturedNews($atts){
ob_start();
$params = shortcode_atts(array(
    'cat_id' => '',
    'posts_per_page' => ''
 ), $atts);

  $args = array(
  "post_type" => "post",
  'posts_per_page' => $params['posts_per_page'],
  'post_status' => 'publish',
  'order' => 'DESC',
  'orderby' => 'date',
  'category_nam' => 'featured',
  'taxonomy'=>'category',
  'cat' => $params['cat_id'],
)

?>
<div class='lh_news_featured'>
<?php
$query = new WP_Query( $args );
    while ( $query->have_posts() ) : $query->the_post();
    ?>
    <div class="lh_article_single">
      <div class="lh_news_image_inner">
          <a href="<?php echo get_permalink() ?>" target="_blank">
          <img src="<?php echo get_the_post_thumbnail_url();  ?>" class="lh_news_image"  alt='single_post_image'/>
        </a>
      </div>
      <div class="lh_news_image_decrtiption_inner">
        <?php
        $posttags = get_the_tags();
        if ($posttags) {
          foreach($posttags as $tag) { ?>
            <p class="lh_news_tag_inner">
            <?php echo $tag->name . ' '; ?>
            </p>
            <?php
          }
        }
         ?>
        <a href="<?php echo get_permalink() ?>" target="_blank">
            <p class="lh_regular_description"><?php the_title(); ?></p>
        </a>
        <p class="lh_publication_date lh_regular_description "><i class="fas fa-clock"></i> <?php echo get_the_date();?></p>
      </div>
    </div>
    <?php
    endwhile;
?>
</div>
<?php
 $output = ob_get_contents();
 ob_end_clean();
 return $output;
}

add_shortcode('show_featured', 'showFeaturedNews');