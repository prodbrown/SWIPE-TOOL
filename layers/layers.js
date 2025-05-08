var wms_layers = [];

var format_Mchikichiniward_0 = new ol.format.GeoJSON();
var features_Mchikichiniward_0 = format_Mchikichiniward_0.readFeatures(json_Mchikichiniward_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mchikichiniward_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mchikichiniward_0.addFeatures(features_Mchikichiniward_0);
var lyr_Mchikichiniward_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mchikichiniward_0, 
                style: style_Mchikichiniward_0,
                popuplayertitle: 'Mchikichini-ward',
                interactive: false,
                title: '<img src="styles/legend/Mchikichiniward_0.png" /> Mchikichini-ward'
            });
var format_Buildings_1 = new ol.format.GeoJSON();
var features_Buildings_1 = format_Buildings_1.readFeatures(json_Buildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_1.addFeatures(features_Buildings_1);
var lyr_Buildings_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_1, 
                style: style_Buildings_1,
                popuplayertitle: 'Buildings',
                interactive: false,
                title: '<img src="styles/legend/Buildings_1.png" /> Buildings'
            });
var format_Floodproneareas_2 = new ol.format.GeoJSON();
var features_Floodproneareas_2 = format_Floodproneareas_2.readFeatures(json_Floodproneareas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Floodproneareas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Floodproneareas_2.addFeatures(features_Floodproneareas_2);
var lyr_Floodproneareas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Floodproneareas_2, 
                style: style_Floodproneareas_2,
                popuplayertitle: 'Flood-prone-areas',
                interactive: false,
                title: '<img src="styles/legend/Floodproneareas_2.png" /> Flood-prone-areas'
            });

lyr_Mchikichiniward_0.setVisible(true);lyr_Buildings_1.setVisible(true);lyr_Floodproneareas_2.setVisible(true);
var layersList = [lyr_Mchikichiniward_0,lyr_Buildings_1,lyr_Floodproneareas_2];
lyr_Mchikichiniward_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'reg_code': 'reg_code', 'reg_name': 'reg_name', 'dist_code': 'dist_code', 'dist_name': 'dist_name', 'counc_code': 'counc_code', 'counc_name': 'counc_name', 'const_code': 'const_code', 'const_name': 'const_name', 'div_code': 'div_code', 'div_name': 'div_name', 'ward_code': 'ward_code', 'ward_name': 'ward_name', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Buildings_1.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'building': 'building', 'building_l': 'building_l', 'building_m': 'building_m', 'addr_full': 'addr_full', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'office': 'office', 'source': 'source', 'name_sw': 'name_sw', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_Floodproneareas_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'date': 'date', 'flood_year': 'flood_year', 'flood_dept': 'flood_dept', 'flood_cm': 'flood_cm', 'flood_sour': 'flood_sour', 'flood_susp': 'flood_susp', 'flood_mont': 'flood_mont', 'consent': 'consent', 'dwelling_t': 'dwelling_t', 'building_u': 'building_u', 'years_in_h': 'years_in_h', 'ward': 'ward', 'sub_ward': 'sub_ward', 'street': 'street', 'landmark': 'landmark', 'shina': 'shina', 'house_numb': 'house_numb', 'experience': 'experience', 'moved': 'moved', 'moved_year': 'moved_year', });
lyr_Mchikichiniward_0.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'reg_code': 'TextEdit', 'reg_name': 'TextEdit', 'dist_code': 'TextEdit', 'dist_name': 'TextEdit', 'counc_code': 'TextEdit', 'counc_name': 'TextEdit', 'const_code': 'TextEdit', 'const_name': 'TextEdit', 'div_code': 'TextEdit', 'div_name': 'TextEdit', 'ward_code': 'TextEdit', 'ward_name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Buildings_1.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'building_m': 'TextEdit', 'addr_full': 'TextEdit', 'addr_house': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'office': 'TextEdit', 'source': 'TextEdit', 'name_sw': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_Floodproneareas_2.set('fieldImages', {'ogc_fid': 'Range', 'id': 'TextEdit', 'date': 'TextEdit', 'flood_year': 'TextEdit', 'flood_dept': 'TextEdit', 'flood_cm': 'TextEdit', 'flood_sour': 'TextEdit', 'flood_susp': 'TextEdit', 'flood_mont': 'TextEdit', 'consent': 'TextEdit', 'dwelling_t': 'TextEdit', 'building_u': 'TextEdit', 'years_in_h': 'TextEdit', 'ward': 'TextEdit', 'sub_ward': 'TextEdit', 'street': 'TextEdit', 'landmark': 'TextEdit', 'shina': 'TextEdit', 'house_numb': 'TextEdit', 'experience': 'TextEdit', 'moved': 'TextEdit', 'moved_year': 'TextEdit', });
lyr_Mchikichiniward_0.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'reg_code': 'no label', 'reg_name': 'no label', 'dist_code': 'no label', 'dist_name': 'no label', 'counc_code': 'no label', 'counc_name': 'no label', 'const_code': 'no label', 'const_name': 'no label', 'div_code': 'no label', 'div_name': 'no label', 'ward_code': 'no label', 'ward_name': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Buildings_1.set('fieldLabels', {'name': 'no label', 'name_en': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_m': 'no label', 'addr_full': 'no label', 'addr_house': 'no label', 'addr_stree': 'no label', 'addr_city': 'no label', 'office': 'no label', 'source': 'no label', 'name_sw': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_Floodproneareas_2.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'date': 'no label', 'flood_year': 'no label', 'flood_dept': 'no label', 'flood_cm': 'no label', 'flood_sour': 'no label', 'flood_susp': 'no label', 'flood_mont': 'no label', 'consent': 'no label', 'dwelling_t': 'no label', 'building_u': 'no label', 'years_in_h': 'no label', 'ward': 'no label', 'sub_ward': 'no label', 'street': 'no label', 'landmark': 'no label', 'shina': 'no label', 'house_numb': 'no label', 'experience': 'no label', 'moved': 'no label', 'moved_year': 'no label', });
lyr_Floodproneareas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});