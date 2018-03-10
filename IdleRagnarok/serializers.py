from django.contrib.auth.models import User, Group
from rest_framework import serializers
from IdleRagnarok.server_functions.file_interpreter import DBConnector
from IdleRagnarok.model import Chars

CONST_DB = DBConnector()


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class CharsSerializer(serializers.HyperlinkedModelSerializer):

    class_name = serializers.SerializerMethodField()

    def get_class_name(self, obj):
        return CONST_DB.id2class(obj.class_id)

    class Meta:
        model = Chars
        fields = (
            'char_id', 'account_id', 'char_num', 'name', 'class_name', 'base_level',
            'job_level', 'base_exp',
            'job_exp', 'zeny', 'str', 'agi', 'vit', 'int', 'dex', 'luk',
            'max_hp',
            'hp', 'max_sp', 'sp',
            'status_point', 'skill_point', 'option', 'karma', 'manner',
            'party_id',
            'guild_id', 'pet_id',
            'homun_id', 'elemental_id', 'hair', 'hair_color', 'clothes_color',
            'body', 'weapon', 'shield',
            'head_top', 'head_mid', 'head_bottom', 'robe', 'last_map',
            'last_x',
            'last_y', 'save_map',
            'save_x', 'save_y', 'partner_id', 'online', 'father', 'mother',
            'child', 'fame', 'rename',
            'delete_date', 'slotchange', 'char_opt', 'font', 'unban_time',
            'uniqueitem_counter', 'sex',
            'hotkey_rowshift')


# Escape not allowed names in python, to match database
CharsSerializer._declared_fields["str"] = serializers.IntegerField(
    source="str_stat")
CharsSerializer._declared_fields["int"] = serializers.IntegerField(
    source="int_stat")
