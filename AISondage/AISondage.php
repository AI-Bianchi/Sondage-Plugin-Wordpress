<?php
/*
Plugin Name: A.I Sondage
Plugin URI: http://aibianchi.com
Description: Un simple plugin de sondage
Version: 0.1
Author: Jefferson Bianchi
Author URI: https://www.facebook.com/AI-Bianchi-829446067257329/
License: GPL2
*/


add_action('widgets_init','AISondage_init');

function AISondage_init (){  
	register_widget("AISondage_widget");

	
}

class AISondage_widget extends WP_widget
{

	public function AISondage_widget(){
		
		$options = array(
			"classname" => "AISondage",
			"description" => "Un simple plugin de sondage"
		);
		
		
		$this->WP_widget("widget-AISondage", "Sondage", $options);
		
	}
	
	public function widget($args, $d){
		extract($args);
		echo $before_widget;
		echo $before_title.$d['titre'].$after_title;
		echo "<div id='drawing'></div>";
		echo $after_widget;
		
		
	}
	
	public function update($new, $old){
		
		return $new;
	}
	
	public function form($d){
		
		$default = array (
			"titre" => "Exemple de sondage"
		);
		
		$d = wp_parse_args($d, $default);
		?>
			<p>
				<label for=<?php echo $this->get_field_name("titre"); ?>">Titre:  </label>
				<input 
					name="<?php echo $this->get_field_name("titre"); ?>" 
					id="<?php echo $this->get_field_id("titre"); ?>"
					type="text"
					value="<?php echo $d['titre']; ?>"
				/>
			</p>
		<?php
		
	}
}