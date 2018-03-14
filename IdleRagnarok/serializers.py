from django.contrib.auth.models import User, Group
from rest_framework import serializers

from IdleRagnarok.server_functions.file_interpreter import DBConnector
from IdleRagnarok.model import Chars, Guilds
from IdleRagnarok.client_functions import sprite_interpreter as SpriteInterpreter

CONST_DB = DBConnector()


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class GuildsSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Guilds
        fields = (
            'guild_id',	'name', 'char_id', 'master', 'guild_lv',
            'connect_member', 'max_member', 'average_lv', 'exp', 'next_exp',
            'skill_point', 'mes1', 'mes2', 'emblem_len', 'emblem_id')


class CharsSerializer(serializers.HyperlinkedModelSerializer):

    guild_name = serializers.SerializerMethodField()
    class_name = serializers.SerializerMethodField()
    animation = serializers.SerializerMethodField()

    def get_guild_name(self, obj):
        try:
            obj = Guilds.objects.get(guild_id=obj.guild_id)
            obj_ser = GuildsSerializer(obj)
            return obj_ser.data['name']
        except:
            return 'No guild'

    def get_class_name(self, obj):
        return CONST_DB.id2class(obj.class_id)

    def get_animation(self, obj):
        return obj.animation + SpriteInterpreter.build_animation('wizard', 'kopf_1', ['Black_Valkyrie_Helm', None, None],
                'SKILL', 1)  # placeholder

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
            'hotkey_rowshift', 'guild_name', 'animation')


# Escape not allowed names in python, to match database
CharsSerializer._declared_fields["str"] = serializers.IntegerField(
    source="str_stat")
CharsSerializer._declared_fields["int"] = serializers.IntegerField(
    source="int_stat")
